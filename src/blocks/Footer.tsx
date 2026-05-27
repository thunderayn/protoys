import { useState } from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import CheckIcon from '@mui/icons-material/Check'
import SvgIcon from '@mui/material/SvgIcon'
import { useLanguage } from '../i18n/LanguageContext'
import { footerText } from '../i18n/translations/footer'

function TikTokIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.54a8.16 8.16 0 0 0 4.77 1.52V7.62a4.85 4.85 0 0 1-1-.93z" />
    </SvgIcon>
  )
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = footerText[lang]
  const [copied, setCopied] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(t.contact.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

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

            {/* Email — click to copy */}
            <button
              onClick={handleCopyEmail}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span') as HTMLElement
                if (span) span.style.color = '#C49A3C'
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span') as HTMLElement
                if (span) span.style.color = '#666'
              }}
            >
              <EmailIcon sx={{ fontSize: 16, color: '#C49A3C', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#666', transition: 'color 0.2s' }}>
                {t.contact.email}
              </span>
            </button>

            {[
              { href: 'https://instagram.com/protoys', Icon: InstagramIcon, label: 'Instagram' },
              { href: 'https://tiktok.com/@protoys',   Icon: TikTokIcon,    label: 'TikTok'    },
              { href: 'https://youtube.com/@protoys',  Icon: YouTubeIcon,   label: 'YouTube'   },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  textDecoration: 'none',
                  color: '#666',
                  fontSize: 13,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C49A3C' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#666' }}
              >
                <Icon sx={{ fontSize: 16, color: '#C49A3C', flexShrink: 0 }} />
                {label}
              </a>
            ))}
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

      {/* Copy notification */}
      <div
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#fff',
          border: '1px solid #e8d9bc',
          borderLeft: '3px solid #C49A3C',
          borderRadius: 3,
          padding: '12px 18px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
          fontSize: 13,
          fontWeight: 600,
          color: '#333',
          letterSpacing: '0.02em',
          pointerEvents: 'none',
          opacity: copied ? 1 : 0,
          transform: copied ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <CheckIcon sx={{ fontSize: 15, color: '#C49A3C' }} />
        Email copied to clipboard
      </div>
    </footer>
  )
}
