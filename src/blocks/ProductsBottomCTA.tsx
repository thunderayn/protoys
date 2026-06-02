import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { productsPageText } from '../i18n/translations/products'

const BEAR_IMG =
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041986/valentine_vxlnqx.png'

export default function ProductsBottomCTA() {
  const { lang } = useLanguage()
  const t = productsPageText[lang].bottomCta

  return (
    <section style={{ marginTop: 0 }}>
      {/* Desktop */}
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: '45% 55%' }}
      >
        {/* Left: bear image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 340 }}>
          <img
            src={BEAR_IMG}
            alt="Plush toy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />
        </div>

        {/* Right: CTA text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '72px 80px',
            background: '#faf8f5',
            borderTop: '1px solid #f0f0f0',
          }}
        >
          <div style={{ maxWidth: 440 }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 2.4vw, 34px)',
                fontWeight: 900,
                color: '#1a1714',
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
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 32px' }}>
              {t.desc}
            </p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href="/contact"
              sx={{
                backgroundColor: '#c7ab54',
                color: '#fff',
                px: 4,
                py: 1.4,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                borderRadius: '3px',
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
              }}
            >
              {t.button}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div
          style={{
            height: 240,
            overflow: 'hidden',
          }}
        >
          <img
            src={BEAR_IMG}
            alt="Plush toy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
          />
        </div>
        <div style={{ padding: '48px 48px', background: '#faf8f5', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#1a1714', lineHeight: 1.15, margin: '0 0 14px' }}>
            {t.heading.map((line, i) => (
              <Fragment key={i}>
                {line}
                {i < t.heading.length - 1 && <br />}
              </Fragment>
            ))}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 28px' }}>
            {t.desc}
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="/contact"
            sx={{
              backgroundColor: '#c7ab54',
              color: '#fff',
              px: 3.5,
              py: 1.25,
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              borderRadius: '3px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
            }}
          >
            {t.button}
          </Button>
        </div>
      </div>
    </section>
  )
}
