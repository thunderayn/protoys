import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const IMG_MAIN = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265056/factory4_jrcxct.png'
const IMG_TR   = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
const IMG_BR   = 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80'
const IMG_WH   = 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80'

export default function AboutWhySection() {
  const { lang } = useLanguage()
  const t = aboutPageText[lang].why

  return (
    <section style={{ background: '#fff', padding: '80px 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Desktop layout */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: '44% 56%', gap: 64, alignItems: 'start' }}
        >
          {/* Left: text */}
          <div style={{ paddingBottom: 80 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#c7ab54',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                margin: '0 0 14px',
              }}
            >
              {t.eyebrow}
            </p>
            <div style={{ width: 32, height: 2, background: '#c7ab54', marginBottom: 18 }} />
            <h2
              style={{
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 900,
                color: '#1a1714',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                margin: '0 0 20px',
              }}
            >
              {t.heading}
            </h2>
            <p
              style={{
                fontSize: 14,
                color: '#666',
                lineHeight: 1.85,
                margin: '0 0 28px',
              }}
            >
              {t.body}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {t.bullets.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <TaskAltIcon sx={{ fontSize: 18, color: '#c7ab54', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#444' }}>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              href="/oem-odm"
              sx={{
                borderColor: '#c7ab54',
                color: '#c7ab54',
                px: 3,
                py: 1,
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.07em',
                borderRadius: '3px',
                '&:hover': { borderColor: '#a08c3c', color: '#a08c3c', backgroundColor: 'transparent' },
              }}
            >
              {t.cta}
            </Button>
          </div>

          {/* Right: images + factory card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {/* Image grid: main left + 2 stacked right */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '58% 42%',
                gridTemplateRows: '220px 220px',
                gap: 6,
              }}
            >
              <div style={{ gridRow: 'span 2', overflow: 'hidden', borderRadius: 2 }}>
                <img
                  src={IMG_MAIN}
                  alt="Factory floor"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: 2 }}>
                <img
                  src={IMG_TR}
                  alt="Quality control"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: 2 }}>
                <img
                  src={IMG_BR}
                  alt="Production equipment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Factory info card + warehouse image */}
            <div style={{ display: 'grid', gridTemplateColumns: '62% 38%', gap: 6, minHeight: 130 }}>
              <div
                style={{
                  background: '#f7f3ec',
                  padding: '22px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 2,
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: '#1a1714',
                      letterSpacing: '0.06em',
                      margin: '0 0 8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.factory.title}
                  </h4>
                  <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65, margin: 0 }}>
                    {t.factory.body}
                  </p>
                </div>
                <button
                  onClick={() => window.location.href = '/oem-odm'}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 12,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#c7ab54',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.factory.cta} <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </button>
              </div>
              <div style={{ overflow: 'hidden', borderRadius: 2 }}>
                <img
                  src={IMG_WH}
                  alt="Warehouse"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden" style={{ paddingBottom: 60 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#c7ab54', letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            {t.eyebrow}
          </p>
          <div style={{ width: 28, height: 2, background: '#c7ab54', marginBottom: 14 }} />
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1714', margin: '0 0 16px', lineHeight: 1.15 }}>
            {t.heading}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: '0 0 20px' }}>{t.body}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.bullets.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <TaskAltIcon sx={{ fontSize: 17, color: '#c7ab54', flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#444' }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ height: 220, overflow: 'hidden', borderRadius: 2, marginBottom: 6 }}>
            <img src={IMG_MAIN} alt="Factory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ background: '#f7f3ec', padding: '20px', borderRadius: 2, marginBottom: 16 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#1a1714', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.factory.title}
            </h4>
            <p style={{ fontSize: 12, color: '#666', lineHeight: 1.65, margin: 0 }}>{t.factory.body}</p>
          </div>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderColor: '#c7ab54', color: '#c7ab54', px: 3, py: 1, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.07em', borderRadius: '3px', '&:hover': { borderColor: '#a08c3c', color: '#a08c3c', backgroundColor: 'transparent' } }}
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
