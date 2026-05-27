import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { useLanguage } from '../i18n/LanguageContext'
import { productsPageText } from '../i18n/translations/products'

const ICONS = [
  <VerifiedUserOutlinedIcon sx={{ fontSize: 36, color: '#c7ab54' }} />,
  <SpaOutlinedIcon sx={{ fontSize: 36, color: '#c7ab54' }} />,
  <TuneOutlinedIcon sx={{ fontSize: 36, color: '#c7ab54' }} />,
  <LocalShippingOutlinedIcon sx={{ fontSize: 36, color: '#c7ab54' }} />,
]

export default function ProductsFeaturesBar() {
  const { lang } = useLanguage()
  const items = productsPageText[lang].features

  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Desktop: 4-column row */}
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
                padding: '36px 20px',
                borderRight: i < items.length - 1 ? '1px solid #ececec' : 'none',
              }}
            >
              <div style={{ marginBottom: 12 }}>{ICONS[i]}</div>
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
              <p style={{ fontSize: 12, color: '#888', lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
              <div style={{ marginBottom: 10 }}>{ICONS[i]}</div>
              <h3 style={{ fontSize: 10, fontWeight: 700, color: '#111', margin: '0 0 6px' }}>
                {title}
              </h3>
              <p style={{ fontSize: 11, color: '#888', lineHeight: 1.5, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
