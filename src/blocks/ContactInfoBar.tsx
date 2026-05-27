import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/WhatsApp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const ICONS = [MailOutlineIcon, LocalPhoneOutlinedIcon, ChatBubbleOutlineIcon, AccessTimeIcon]

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
            <div
              key={item.label}
              style={{
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRight: isLast ? 'none' : '1px solid #ebebeb',
              }}
            >
              <Icon sx={{ fontSize: 28, color: '#C49A3C', mb: 1.25 }} />
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#111',
                  margin: '0 0 6px',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
                {item.value}
              </p>
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-info-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .contact-info-grid > div:nth-child(n+3) {
            border-top: 1px solid #ebebeb;
          }
        }
      `}</style>
    </section>
  )
}
