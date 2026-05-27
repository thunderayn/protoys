import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const BEARS_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon2_qn55fi.jpg'

export default function ContactBottomSection() {
  const { lang } = useLanguage()
  const t = contactPageText[lang].bottom

  return (
    <section style={{ background: '#f5f0ea' }}>
      {/* Desktop */}
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: '45% 55%' }}
      >
        {/* Left: image */}
        <div style={{ position: 'relative', minHeight: 340, overflow: 'hidden' }}>
          <img
            src={BEARS_IMG}
            alt="Plush toys"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>

        {/* Right: CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '72px 80px',
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 2.8vw, 38px)',
                fontWeight: 900,
                color: '#111',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                margin: '0 0 16px',
              }}
            >
              {t.heading.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < t.heading.length - 1 && <br />}
                </Fragment>
              ))}
            </h2>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, margin: '0 0 32px' }}>
              {t.body}
            </p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href="#"
              sx={{
                backgroundColor: '#c7ab54',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                borderRadius: '3px',
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
              }}
            >
              {t.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div style={{ height: 240, overflow: 'hidden' }}>
          <img
            src={BEARS_IMG}
            alt="Plush toys"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>
        <div style={{ padding: '48px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#111', lineHeight: 1.15, margin: '0 0 14px' }}>
            {t.heading.map((line, i) => (
              <Fragment key={i}>{line}{i < t.heading.length - 1 && <br />}</Fragment>
            ))}
          </h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, margin: '0 0 28px' }}>{t.body}</p>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="#"
            sx={{
              backgroundColor: '#c7ab54',
              color: '#fff',
              px: 3.5,
              py: 1.25,
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              borderRadius: '3px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
            }}
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
