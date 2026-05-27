import { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const FACTORY_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png'

const WORLD_MAP_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779872998/wordmap_with_pointer_ibzd3t.png'

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

          {/* World map with overlaid office cards */}
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={WORLD_MAP_IMG}
              alt="Global offices map"
              style={{ width: '100%', borderRadius: 4, display: 'block' }}
            />

            {/* Canada — top-left area */}
            <div style={{
              position: 'absolute',
              top: '45%',
              left: '3%',
              background: '#fff',
              borderRadius: 4,
              padding: '8px 10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
              minWidth: 140,
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', color: '#C49A3C', margin: '0 0 3px', textTransform: 'uppercase' }}>
                {t.offices.list[1].title}
              </p>
              <p style={{ fontSize: 11, color: '#444', margin: '0 0 2px' }}>{t.offices.list[1].location}</p>
              <p style={{ fontSize: 11, color: '#666', margin: '0 0 2px' }}>{t.offices.list[1].tel}</p>
              <a href={`mailto:${t.offices.list[1].email}`} style={{ fontSize: 11, color: '#C49A3C', textDecoration: 'underline' }}>
                {t.offices.list[1].email}
              </a>
            </div>

            {/* China — right area */}
            <div style={{
              position: 'absolute',
              top: '60%',
              left: '68%',
              background: '#fff',
              borderRadius: 4,
              padding: '8px 10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
              minWidth: 150,
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', color: '#C49A3C', margin: '0 0 3px', textTransform: 'uppercase' }}>
                {t.offices.list[0].title}
              </p>
              <p style={{ fontSize: 11, color: '#444', margin: '0 0 2px' }}>{t.offices.list[0].location}</p>
              <p style={{ fontSize: 11, color: '#666', margin: '0 0 2px' }}>{t.offices.list[0].tel}</p>
              <a href={`mailto:${t.offices.list[0].email}`} style={{ fontSize: 11, color: '#C49A3C', textDecoration: 'underline' }}>
                {t.offices.list[0].email}
              </a>
            </div>
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
