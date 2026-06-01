import { useLanguage } from '../i18n/LanguageContext'
import { newsPageText } from '../i18n/translations/news'

const HERO_IMG =
  'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041987/christams_mng2tn.png'

export default function NewsHeroSection() {
  const { lang } = useLanguage()
  const t = newsPageText[lang].hero

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '46vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
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
          padding: '80px clamp(20px, 6vw, 80px)',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(34px, 4.5vw, 56px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: '0 0 14px',
          }}
        >
          {t.title}
        </h1>

        <div style={{ width: 44, height: 2, background: '#c7ab54', marginBottom: 18 }} />

        <p
          style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: 15,
            lineHeight: 1.75,
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {t.sub}
        </p>
      </div>
    </section>
  )
}
