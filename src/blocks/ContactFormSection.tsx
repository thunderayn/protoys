import { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RoomIcon from '@mui/icons-material/Room'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const FACTORY_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png'

/* Approximate pin positions on the world map (% from top-left of the map area) */
const PINS = [
  { top: '44%', left: '72%' }, // Yangzhou, China (HQ)
  { top: '38%', left: '17%' }, // Los Angeles, USA
  { top: '30%', left: '48%' }, // Hamburg, Germany
  { top: '54%', left: '75%' }, // Singapore
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #ddd',
  borderRadius: 3,
  fontSize: 13,
  color: '#333',
  outline: 'none',
  fontFamily: 'inherit',
  background: '#fff',
}

export default function ContactFormSection() {
  const { lang } = useLanguage()
  const t = contactPageText[lang]

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section style={{ padding: '72px 24px', background: '#fff' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
        className="contact-form-grid"
      >
        {/* Left — form */}
        <div>
          <div style={{ width: 36, height: 3, background: '#C49A3C', marginBottom: 14 }} />
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#111',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            {t.form.heading}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 32px' }}>
            {t.form.body}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input
              name="name"
              placeholder={t.form.name}
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder={t.form.email}
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              name="subject"
              placeholder={t.form.subject}
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder={t.form.message}
              value={form.message}
              onChange={handleChange}
              rows={6}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {}}
            sx={{
              mt: 3,
              backgroundColor: '#C49A3C',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              borderRadius: '3px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#A07828', boxShadow: 'none' },
            }}
          >
            {t.form.cta}
          </Button>
        </div>

        {/* Right — global offices */}
        <div>
          <div style={{ width: 36, height: 3, background: '#C49A3C', marginBottom: 14 }} />
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#111',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            {t.offices.heading}
          </h2>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 24px' }}>
            {t.offices.body}
          </p>

          {/* World map with pins */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2 / 1',
              background: '#f5f0ea',
              borderRadius: 4,
              overflow: 'hidden',
              marginBottom: 28,
            }}
          >
            {/* Dot-grid world-map texture */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(circle, #c9b99a 1px, transparent 1px)',
                backgroundSize: '8px 8px',
                opacity: 0.55,
              }}
            />
            {/* Location pins */}
            {PINS.map((pin, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: pin.top,
                  left: pin.left,
                  transform: 'translate(-50%, -100%)',
                }}
              >
                <RoomIcon sx={{ fontSize: 22, color: '#C49A3C' }} />
              </div>
            ))}
          </div>

          {/* Office cards — 2×2 grid */}
          <div
            className="contact-office-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {t.offices.list.map((office) => (
              <div
                key={office.title}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <img
                  src={FACTORY_IMG}
                  alt={office.title}
                  style={{
                    width: 72,
                    height: 56,
                    objectFit: 'cover',
                    borderRadius: 3,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: '#111',
                      margin: '0 0 3px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {office.title}
                  </p>
                  <p style={{ fontSize: 12, color: '#666', margin: '0 0 2px' }}>{office.location}</p>
                  <p style={{ fontSize: 12, color: '#666', margin: '0 0 2px' }}>
                    {t.offices.telLabel} {office.tel}
                  </p>
                  <p style={{ fontSize: 12, color: '#C49A3C', margin: 0 }}>
                    {t.offices.emailLabel}{' '}
                    <a href={`mailto:${office.email}`} style={{ color: '#C49A3C', textDecoration: 'underline' }}>
                      {office.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
