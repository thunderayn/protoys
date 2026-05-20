import BusinessIcon from '@mui/icons-material/Business'
import ShieldIcon from '@mui/icons-material/Shield'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import GroupsIcon from '@mui/icons-material/Groups'
import PublicIcon from '@mui/icons-material/Public'
import { useLanguage } from '../i18n/LanguageContext'
import { featuresText } from '../i18n/translations/features'

const icons = [
  <BusinessIcon sx={{ fontSize: 38, color: '#C49A3C' }} />,
  <ShieldIcon sx={{ fontSize: 38, color: '#C49A3C' }} />,
  <PrecisionManufacturingIcon sx={{ fontSize: 38, color: '#C49A3C' }} />,
  <GroupsIcon sx={{ fontSize: 38, color: '#C49A3C' }} />,
  <PublicIcon sx={{ fontSize: 38, color: '#C49A3C' }} />,
]

export default function FeaturesStrip() {
  const { lang } = useLanguage()
  const items = featuresText[lang]

  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Desktop: strict 5-column row with dividers */}
        <div
          className="hidden md:flex"
          style={{ borderTop: '1px solid #ececec', borderBottom: '1px solid #ececec' }}
        >
          {items.map(({ title, desc }, i) => (
            <div
              key={title}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 20px',
                borderRight: i < items.length - 1 ? '1px solid #ececec' : 'none',
              }}
            >
              <div style={{ marginBottom: 12 }}>{icons[i]}</div>
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#111',
                  letterSpacing: '0.05em',
                  margin: '0 0 8px',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: 2-column grid */}
        <div
          className="grid md:hidden"
          style={{ gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #ececec' }}
        >
          {items.map(({ title, desc }, i) => (
            <div
              key={title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '28px 14px',
                borderRight: i % 2 === 0 ? '1px solid #ececec' : 'none',
                borderBottom: '1px solid #ececec',
              }}
            >
              <div style={{ marginBottom: 10 }}>{icons[i]}</div>
              <h3 style={{ fontSize: 10, fontWeight: 700, color: '#111', margin: '0 0 6px' }}>
                {title}
              </h3>
              <p style={{ fontSize: 11, color: '#888', lineHeight: 1.5, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
