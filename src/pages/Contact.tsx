import { useState } from 'react'
import { PageBanner } from '@/components/ui/PageBanner'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WHATSAPP_NUMBER = '221773378554'

type FormState = {
  nom: string
  email: string
  telephone: string
  typeEvenement: string
  date: string
  budget: string
  message: string
}

const EVENT_TYPES = [
  'Mariage',
  'Anniversaire',
  'Événement corporate',
  'Soirée privée',
  'Autre',
]

const BUDGET_RANGES = [
  'Moins de 500 000 FCFA',
  '500 000 – 1 000 000 FCFA',
  '1 000 000 – 3 000 000 FCFA',
  'Plus de 3 000 000 FCFA',
  'À définir ensemble',
]

// Intro personnalisée selon le type d'événement
const INTRO_BY_TYPE: Record<string, string> = {
  'Mariage':
    '💍 *Demande de devis — Mariage*\nBonjour Festa Events ! Je souhaite organiser mon mariage et j\'aimerais bénéficier de vos services.',
  'Anniversaire':
    '🎉 *Demande de devis — Anniversaire*\nBonjour Festa Events ! Je prépare une fête d\'anniversaire et je souhaite votre aide pour en faire un moment inoubliable.',
  'Événement corporate':
    '💼 *Demande de devis — Événement corporate*\nBonjour Festa Events ! Nous souhaitons organiser un événement d\'entreprise et recherchons un prestataire professionnel.',
  'Soirée privée':
    '✨ *Demande de devis — Soirée privée*\nBonjour Festa Events ! J\'organise une soirée privée et je voudrais votre expertise pour la rendre exceptionnelle.',
  'Autre':
    '📋 *Demande de devis*\nBonjour Festa Events ! J\'ai un projet événementiel et j\'aimerais en discuter avec vous.',
}

function buildEmailBody(form: FormState): string {
  const dateFormatted = form.date
    ? new Date(form.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Non précisée'

  return [
    `Bonjour Festa Events,`,
    ``,
    `Je vous contacte pour une demande de devis concernant un(e) ${form.typeEvenement || 'événement'}.`,
    ``,
    `── Coordonnées ──`,
    `Nom       : ${form.nom}`,
    `Email     : ${form.email || 'Non renseigné'}`,
    `Téléphone : ${form.telephone || 'Non renseigné'}`,
    ``,
    `── Détails de l'événement ──`,
    `Type      : ${form.typeEvenement || 'Non précisé'}`,
    `Date      : ${dateFormatted}`,
    `Budget    : ${form.budget || 'À définir'}`,
    ``,
    `── Message ──`,
    form.message || '(aucun message)',
    ``,
    `Dans l'attente de votre retour,`,
    `${form.nom}`,
  ].join('\n')
}

function buildWhatsAppMessage(form: FormState): string {
  const intro = INTRO_BY_TYPE[form.typeEvenement] || INTRO_BY_TYPE['Autre']

  const lines = [
    intro,
    '',
    '👤 *Mes coordonnées :*',
    `• Nom : ${form.nom}`,
    form.email      ? `• Email : ${form.email}`      : null,
    form.telephone  ? `• Tél : ${form.telephone}`    : null,
    '',
    '📅 *Détails de l\'événement :*',
    form.typeEvenement ? `• Type : ${form.typeEvenement}`  : null,
    form.date          ? `• Date prévue : ${new Date(form.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}` : null,
    form.budget        ? `• Budget : ${form.budget}`       : null,
    '',
    form.message ? `💬 *Message :*\n${form.message}` : null,
    '',
    '_Dans l\'attente de votre retour, merci !_ 🙏',
  ]

  return lines.filter((l) => l !== null).join('\n')
}

export function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState<FormState>({
    nom: '', email: '', telephone: '', typeEvenement: '',
    date: '', budget: '', message: '',
  })
  const [loading, setLoading] = useState<'whatsapp' | 'email' | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading('whatsapp')
    const message = buildWhatsAppMessage(form)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setLoading(null)
    }, 500)
  }

  const sendViaEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading('email')
    const subject = `Demande de devis — ${form.typeEvenement || 'Événement'} | ${form.nom}`
    const body = buildEmailBody(form)
    const url = `mailto:festaevents.sn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      window.location.href = url
      setLoading(null)
    }, 500)
  }

  return (
    <main ref={ref as React.RefObject<HTMLElement>}>
      <PageBanner
        img="/images/banner-contact.png"
        title="Contactez-Nous"
        subtitle="Discutons de votre prochain événement. Nous sommes à votre écoute."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]}
        objectPosition="center 65%"
      />

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}>

            {/* Informations de contact */}
            <div className="reveal">
              <span className="script-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Nous sommes là pour vous</span>
              <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                Parlons de votre projet
              </h2>
              <span className="gold-divider" style={{ marginBottom: '1.75rem' }} />
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                Remplissez le formulaire ou contactez-nous directement. Nous vous répondons sous 24h avec une proposition personnalisée.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <ContactInfoCard icon={<Phone size={20} />} title="Téléphone" href="tel:+221773378554">
                  +221 77 337 85 54
                </ContactInfoCard>
                <ContactInfoCard icon={<Mail size={20} />} title="Email" href="mailto:festaevents.sn@gmail.com">
                  festaevents.sn@gmail.com
                </ContactInfoCard>
                <ContactInfoCard icon={<MapPin size={20} />} title="Adresse" href="https://maps.google.com">
                  Dakar, Sénégal
                </ContactInfoCard>
                <ContactInfoCard icon={<Clock size={20} />} title="Horaires">
                  Lun – Sam : 8h00 – 20h00
                </ContactInfoCard>
              </div>

              {/* Carte décoration */}
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '16/9',
                boxShadow: 'var(--shadow-card)',
                background: 'var(--dark-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src="/images/banner-apropos.png"
                  alt="Notre bureau Festa Events"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Formulaire */}
            <div className="reveal" style={{ transitionDelay: '150ms' }}>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}>
                    Demande de devis gratuit
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    * Tous les champs marqués sont requis
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Nom + Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <Field label="Nom complet *" id="nom">
                        <input type="text" id="nom" name="nom" required value={form.nom} onChange={handleChange} placeholder="Votre nom" />
                      </Field>
                      <Field label="Email *" id="email">
                        <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" />
                      </Field>
                    </div>

                    {/* Téléphone + Type */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <Field label="Téléphone" id="telephone">
                        <input type="tel" id="telephone" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+221 7X XXX XX XX" />
                      </Field>
                      <Field label="Type d'événement *" id="typeEvenement">
                        <select id="typeEvenement" name="typeEvenement" required value={form.typeEvenement} onChange={handleChange}>
                          <option value="">Choisir...</option>
                          {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                    </div>

                    {/* Date + Budget */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <Field label="Date prévue" id="date">
                        <input type="date" id="date" name="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
                      </Field>
                      <Field label="Budget approximatif" id="budget">
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                          <option value="">Choisir...</option>
                          {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Décrivez votre événement *" id="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Parlez-nous de votre vision, du nombre d'invités, du lieu envisagé..."
                      />
                    </Field>

                    {/* ── Deux boutons d'envoi ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                      {/* Bouton WhatsApp */}
                      <button
                        type="button"
                        onClick={sendViaWhatsApp}
                        disabled={loading !== null}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.6rem',
                          padding: '0.9rem 1.5rem',
                          background: loading === 'whatsapp' ? '#1da84e' : '#25D366',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          cursor: loading !== null ? 'not-allowed' : 'pointer',
                          transition: 'background 0.25s ease, transform 0.2s ease',
                          minHeight: '50px',
                          width: '100%',
                        }}
                        onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#1da84e' }}
                        onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#25D366' }}
                      >
                        {loading === 'whatsapp' ? (
                          <>
                            <Spinner />
                            Ouverture WhatsApp...
                          </>
                        ) : (
                          <>
                            <WhatsAppIcon />
                            Envoyer via WhatsApp
                          </>
                        )}
                      </button>

                      {/* Séparateur */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                          ou
                        </span>
                        <span style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
                      </div>

                      {/* Bouton Email */}
                      <button
                        type="button"
                        onClick={sendViaEmail}
                        disabled={loading !== null}
                        className="btn btn-outline-gold"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '0.9375rem',
                          padding: '0.9rem 1.5rem',
                          minHeight: '50px',
                          opacity: loading !== null ? 0.6 : 1,
                          cursor: loading !== null ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {loading === 'email' ? (
                          <>
                            <Spinner dark />
                            Ouverture Email...
                          </>
                        ) : (
                          <>
                            <Mail size={17} />
                            Envoyer par Email
                          </>
                        )}
                      </button>
                    </div>

                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      textAlign: 'center',
                    }}>
                      Votre demande sera pré-remplie selon le canal choisi.
                    </p>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input, textarea, select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid rgba(0,0,0,0.12);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--text-primary);
          background: var(--white);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          outline: none;
          min-height: 48px;
        }
        input:focus, textarea:focus, select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
        }
        textarea { min-height: 130px; resize: vertical; }
        select { cursor: pointer; }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  )
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          color: 'var(--text-primary)',
          marginBottom: '0.4rem',
        }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactInfoCard({ icon, title, href, children }: { icon: React.ReactNode; title: string; href?: string; children: React.ReactNode }) {
  const content = (
    <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      padding: '1rem 1.25rem',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      transition: 'transform 0.25s ease',
    }}>
      <div style={{
        flexShrink: 0,
        width: '44px',
        height: '44px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--gold-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold-dark)',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>
          {title}
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-primary)' }}>
          {children}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => { (e.currentTarget.firstChild as HTMLElement).style.transform = 'translateX(4px)' }}
        onMouseLeave={(e) => { (e.currentTarget.firstChild as HTMLElement).style.transform = 'translateX(0)' }}
      >
        {content}
      </a>
    )
  }
  return content
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Spinner({ dark }: { dark?: boolean }) {
  return (
    <span style={{
      width: '16px',
      height: '16px',
      border: `2px solid ${dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)'}`,
      borderTopColor: dark ? 'var(--gold-dark)' : '#fff',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
      display: 'inline-block',
      flexShrink: 0,
    }} />
  )
}
