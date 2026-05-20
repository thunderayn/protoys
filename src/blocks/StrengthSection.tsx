import FactoryIcon from '@mui/icons-material/Factory'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import ArticleIcon from '@mui/icons-material/Article'
import LanguageIcon from '@mui/icons-material/Language'
import { useLanguage } from '../i18n/LanguageContext'
import { strengthText } from '../i18n/translations/strength'

const icons = [
  <FactoryIcon sx={{ fontSize: 30, color: '#C49A3C' }} />,
  <PeopleAltIcon sx={{ fontSize: 30, color: '#C49A3C' }} />,
  <PrecisionManufacturingIcon sx={{ fontSize: 30, color: '#C49A3C' }} />,
  <ArticleIcon sx={{ fontSize: 30, color: '#C49A3C' }} />,
  <LanguageIcon sx={{ fontSize: 30, color: '#C49A3C' }} />,
]

export default function StrengthSection() {
  const { lang } = useLanguage()
  const t = strengthText[lang]

  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 24px',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,20,28,0.78)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '0.18em',
              margin: '0 0 12px',
            }}
          >
            {t.heading}
          </h2>
          <div style={{ width: 40, height: 2, background: '#C49A3C', margin: '0 auto' }} />
        </div>

        {/* Stats — icon LEFT, number + label RIGHT */}
        <div
          className="grid grid-cols-2 md:grid-cols-5"
          style={{ gap: '32px 24px' }}
        >
          {t.stats.map(({ value, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ flexShrink: 0 }}>{icons[i]}</div>
              <div>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
