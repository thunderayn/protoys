import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

export default function AboutHeroSection() {
  const { lang } = useLanguage()
  const t = aboutPageText[lang].hero

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '62vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage:
          'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,14,20,0.52)' }} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          padding: '80px 80px',
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#C49A3C',
            letterSpacing: '0.18em',
            margin: '0 0 14px',
            textTransform: 'uppercase',
          }}
        >
          {t.eyebrow}
        </p>

        <h1
          style={{
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            margin: '0 0 20px',
            maxWidth: 560,
          }}
        >
          {t.heading.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < t.heading.length - 1 && <br />}
            </Fragment>
          ))}
        </h1>

        <div style={{ width: 44, height: 2, background: '#C49A3C', marginBottom: 20 }} />

        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 15,
            lineHeight: 1.75,
            margin: '0 0 36px',
            maxWidth: 420,
          }}
        >
          {t.body}
        </p>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          href="/contact"
          sx={{
            backgroundColor: '#C49A3C',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            borderRadius: '3px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#A07828', boxShadow: 'none' },
          }}
        >
          {t.cta}
        </Button>
      </div>
    </section>
  )
}
