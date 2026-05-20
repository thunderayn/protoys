import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { useLanguage } from '../i18n/LanguageContext'
import { footerText } from '../i18n/translations/footer'

export default function Footer() {
  const { lang } = useLanguage()
  const t = footerText[lang]

  return (
    <footer style={{ background: '#fff', color: '#111' }}>
      {/* Top border */}
      <div style={{ height: 1, background: '#ececec' }} />

      {/* Main columns */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '56px 24px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px 48px',
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#C49A3C', lineHeight: 1.1 }}>
              PRO
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: '#555' }}>
              PLUSH TOY
            </div>
          </div>
          <p style={{ fontSize: 13, color: '#333', fontWeight: 600, margin: '0 0 8px' }}>
            {t.brand.tagline}
          </p>
          <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7, margin: 0, maxWidth: 280 }}>
            {t.brand.desc}
          </p>
        </div>

        {/* Quick links column */}
        <div>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#C49A3C',
              margin: '0 0 20px',
            }}
          >
            {t.quickLinks.heading}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.quickLinks.links.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  fontSize: 13,
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C49A3C')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#666')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#C49A3C',
              margin: '0 0 20px',
            }}
          >
            {t.contact.heading}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: '#C49A3C', mt: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                {t.contact.address}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <PhoneIcon sx={{ fontSize: 16, color: '#C49A3C', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#666' }}>{t.contact.tel}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <EmailIcon sx={{ fontSize: 16, color: '#C49A3C', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#666' }}>{t.contact.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          borderTop: '1px solid #ececec',
          padding: '16px 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, color: '#aaa', margin: 0 }}>{t.copyright}</p>
      </div>
    </footer>
  )
}
