import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SvgIcon from '@mui/material/SvgIcon'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

function TikTokIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.54a8.16 8.16 0 0 0 4.77 1.52V7.62a4.85 4.85 0 0 1-1-.93z" />
    </SvgIcon>
  )
}

const ICONS = [MailOutlineIcon, InstagramIcon, TikTokIcon, YouTubeIcon]

export default function ContactInfoBar() {
  const { lang } = useLanguage()
  const t = contactPageText[lang].infoBar

  return (
    <section style={{ padding: '0 24px', background: '#fff' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          border: '1px solid #ebebeb',
          borderRadius: 4,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          overflow: 'hidden',
        }}
        className="contact-info-grid"
      >
        {t.map((item, i) => {
          const Icon = ICONS[i]
          const isLast = i === t.length - 1
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRight: isLast ? 'none' : '1px solid #ebebeb',
                textDecoration: 'none',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#faf8f5' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <Icon sx={{ fontSize: 28, color: '#c7ab54', mb: 1.25 }} />
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#1a1714',
                  margin: '0 0 6px',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: 14, color: '#666', margin: 0 }}>
                {item.value}
              </p>
            </a>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-info-grid > a:nth-child(2) {
            border-right: none !important;
          }
          .contact-info-grid > a:nth-child(n+3) {
            border-top: 1px solid #ebebeb;
          }
        }
      `}</style>
    </section>
  )
}
