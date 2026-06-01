import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const HERO_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769208847/home_l0xdey.png'

export default function ContactHeroSection() {
  const { lang } = useLanguage()
  const t = contactPageText[lang].hero

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#f0e4cc',
      }}
    >
      {/* Bear image — right half */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '70%',
          height: '100%',
        }}
      >
        <img
          src={HERO_IMG}
          alt="Plush toy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
        {/* Fade to left */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #f0e4cc 0%, rgba(240,228,204,0.85) 15%, transparent 30%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          padding: '80px clamp(20px, 6vw, 80px)',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 700,
            color: '#5a3e1b',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: '0 0 16px',
            maxWidth: 480,
          }}
        >
          {t.heading}
        </h1>

        <div style={{ width: 44, height: 3, background: '#c7ab54', marginBottom: 20 }} />

        <p
          style={{
            color: '#2e2b27',
            fontSize: 15,
            lineHeight: 1.75,
            margin: '0 0 36px',
            maxWidth: 360,
          }}
        >
          {t.body}
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
    </section>
  )
}
