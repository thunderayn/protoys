import { Fragment } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const BEAR_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon3_l74cyj.jpg'

const CERTS = [
  { label: 'ISO',        src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205583/cert7_tayiok.png' },
  { label: 'Walmart',    src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205581/cert8_y7mjg3.png' },
  { label: 'BSCI',       src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205580/cert4_nx3rm9.png' },
  { label: 'Recycled',   src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert5_jfyfzf.png' },
  { label: 'FSC',        src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert6_iccjux.png' },
  { label: 'Recycled 2', src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert3_lvewgm.jpg' },
  { label: 'Sedex',      src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert1_imtkwd.png' },
]

export default function AboutBottomSection() {
  const { lang } = useLanguage()
  const certsT = aboutPageText[lang].certs
  const ctaT   = aboutPageText[lang].cta

  return (
    <section style={{ marginTop: 0 }}>
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: '6.5fr 3.5fr' }}
      >
        {/* Left: Certifications */}
        <div style={{ padding: '72px 80px', background: '#f8f8f6', borderTop: '1px solid #f0f0f0' }}>
          <div style={{ maxWidth: 480 }}>
            <div style={{ width: 32, height: 2, background: '#c7ab54', marginBottom: 14 }} />
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#1a1714',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 14px',
              }}
            >
              {certsT.eyebrow}
            </h2>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 36px' }}>
              {certsT.body}
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
            {CERTS.map((cert) => (
              <img key={cert.src} src={cert.src} alt={cert.label} style={{ height: 60, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
            ))}
          </div>
        </div>

        {/* Right: CTA with bear */}
        <div
          style={{
            position: 'relative',
            background: '#f0e8d8',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '72px 60px',
          }}
        >
          {/* Bear image (right side) */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '50%',
              height: '100%',
            }}
          >
            <img
              src={BEAR_IMG}
              alt="Plush toy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #f0e8d8 0%, transparent 60%)',
              }}
            />
          </div>

          {/* CTA text */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 300 }}>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.2vw, 30px)',
                fontWeight: 900,
                color: '#1a1714',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                margin: '0 0 16px',
              }}
            >
              {ctaT.heading.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < ctaT.heading.length - 1 && <br />}
                </Fragment>
              ))}
            </h2>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 28px' }}>
              {ctaT.body}
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
              {ctaT.button}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div style={{ padding: '56px 48px', background: '#f8f8f6', borderTop: '1px solid #f0f0f0' }}>
          <div style={{ width: 28, height: 2, background: '#c7ab54', marginBottom: 12 }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1714', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            {certsT.eyebrow}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 28px' }}>{certsT.body}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            {CERTS.map((cert) => (
              <img key={cert.src} src={cert.src} alt={cert.label} style={{ height: 52, width: 'auto', objectFit: 'contain' }} />
            ))}
          </div>
        </div>
        <div style={{ background: '#f0e8d8', padding: '56px 48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: '#1a1714', lineHeight: 1.15, margin: '0 0 14px' }}>
            {ctaT.heading.map((line, i) => (
              <Fragment key={i}>{line}{i < ctaT.heading.length - 1 && <br />}</Fragment>
            ))}
          </h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: '0 0 24px' }}>{ctaT.body}</p>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="/contact"
            sx={{ backgroundColor: '#c7ab54', color: '#fff', px: 3, py: 1.25, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', borderRadius: '3px', boxShadow: 'none', '&:hover': { backgroundColor: '#a08c3c', boxShadow: 'none' } }}
          >
            {ctaT.button}
          </Button>
        </div>
      </div>
    </section>
  )
}
