import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { heroText } from '../i18n/translations/hero'

export default function HeroSection() {
  const { lang } = useLanguage()
  const t = heroText[lang]

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage:
          'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779876508/homepage-cropped-compressed_ncqpic.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .hero-section {
            background-image: url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041988/everyday_zieiam.png) !important;
          }
        }
      `}</style>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)' }} />

      {/* Vertical side labels */}
      <div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          flexDirection: 'column',
          gap: 24,
          zIndex: 1,
        }}
      >
        {t.verticalLabels.map((word) => (
          <span
            key={word}
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: 9,
              letterSpacing: '0.35em',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          padding: '64px 80px 64px 36px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: '0 0 16px',
            maxWidth: 600,
          }}
        >
          {t.titleLines.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < t.titleLines.length - 1 && <br />}
            </Fragment>
          ))}
        </h1>

        <div style={{ width: 48, height: 2, background: '#c7ab54', marginBottom: 20 }} />

        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, margin: '0 0 6px' }}>
          {t.sub1}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, margin: '0 0 40px' }}>
          {t.sub2}
        </p>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#c7ab54',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.07em',
            borderRadius: '3px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
          }}
        >
          {t.cta}
        </Button>
      </div>

    </section>
  )
}
