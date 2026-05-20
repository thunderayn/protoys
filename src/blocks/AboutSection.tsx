import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutText } from '../i18n/translations/about'

export default function AboutSection() {
  const { lang } = useLanguage()
  const t = aboutText[lang]

  const ctaBtn = (
    <Button
      variant="outlined"
      endIcon={<ArrowForwardIcon />}
      sx={{
        borderColor: '#C49A3C',
        color: '#C49A3C',
        px: 3,
        py: 1,
        fontWeight: 700,
        fontSize: '0.75rem',
        letterSpacing: '0.07em',
        borderRadius: '3px',
        alignSelf: 'flex-start',
        '&:hover': { borderColor: '#A07828', color: '#A07828', backgroundColor: 'transparent' },
      }}
    >
      {t.cta}
    </Button>
  )

  return (
    <section style={{ background: '#f8f8f6' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Desktop: split view */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: '42% 58%', minHeight: 460, alignItems: 'stretch' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '72px 60px',
              background: '#f8f8f6',
            }}
          >
            <div style={{ width: 32, height: 2, background: '#C49A3C', marginBottom: 18 }} />
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: '#111',
                letterSpacing: '-0.01em',
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
                margin: '0 0 32px',
                maxWidth: 380,
              }}
            >
              {t.body}
            </p>
            {ctaBtn}
          </div>

          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779035590/%CE%A3_%C3%B4%CF%83_%C3%B42_d6d30p.png"
              alt="Factory"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden">
          <div style={{ height: 240, overflow: 'hidden' }}>
            <img
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779035645/%C2%B5%C3%96_%CF%84_%C3%B9%CF%83%C3%B1%C3%BB%CE%A6%C2%BA%C3%A9_qb7niu.png"
              alt="Factory"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: '48px 24px' }}>
            <div style={{ width: 28, height: 2, background: '#C49A3C', marginBottom: 16 }} />
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#111', margin: '0 0 16px' }}>
              {t.heading}
            </h2>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: '0 0 28px' }}>
              {t.body}
            </p>
            {ctaBtn}
          </div>
        </div>
      </div>
    </section>
  )
}
