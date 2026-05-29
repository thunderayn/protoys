import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'

const hero = {
  en: {
    eyebrow: 'OEM / ODM SERVICE',
    heading: ['Custom Plush Toy', 'OEM/ODM'],
    body: 'End-to-end OEM & ODM solutions for global brands — from concept to delivery with guaranteed quality.',
    cta: 'Get a Quote',
  },
  cn: {
    eyebrow: 'OEM / ODM 定制服务',
    heading: ['毛绒玩具', 'OEM/ODM 定制'],
    body: '从创意到交付，为全球品牌提供一站式 OEM & ODM 解决方案，品质有保障。',
    cta: '获取报价',
  },
}

export default function OemOdmHeroSection() {
  const { lang } = useLanguage()
  const t = hero[lang]

  return (
    <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img
        src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779880045/about-banner-fabric2_zl97an.png"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '75% 80%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 80%)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '80px 80px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#c7ab54', letterSpacing: '0.18em', margin: '0 0 14px', textTransform: 'uppercase' }}>
          {t.eyebrow}
        </p>

        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.01em', margin: '0 0 20px', maxWidth: 560, textTransform: 'uppercase' }}>
          {t.heading.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < t.heading.length - 1 && <br />}
            </Fragment>
          ))}
        </h1>

        <div style={{ width: 44, height: 2, background: '#c7ab54', marginBottom: 20 }} />

        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.75, margin: '0 0 36px', maxWidth: 420 }}>
          {t.body}
        </p>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          href="/contact"
          sx={{
            backgroundColor: '#c7ab54', color: '#fff', px: 4, py: 1.5,
            fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em',
            borderRadius: '3px', boxShadow: 'none',
            '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' },
          }}
        >
          {t.cta}
        </Button>
      </div>
    </section>
  )
}
