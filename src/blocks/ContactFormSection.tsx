import { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPageText } from '../i18n/translations/contact'

const WORLD_MAP_IMG = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1780414627/worldmap-two-pointers_dyhpji.png'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #ddd',
  borderRadius: 3,
  fontSize: 14,
  color: '#2e2b27',
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
    <section style={{ padding: '72px 48px', background: '#fff' }}>
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
          <div style={{ width: 36, height: 3, background: '#c7ab54', marginBottom: 14 }} />
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#1a1714',
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
            {t.form.cta}
          </Button>
        </div>

        {/* Right — global offices */}
        <div>
          <div style={{ width: 36, height: 3, background: '#c7ab54', marginBottom: 14 }} />
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#1a1714',
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

            {/* Canada pin */}
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
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', color: '#c7ab54', margin: '0 0 3px', textTransform: 'uppercase' }}>
                {lang === 'cn' ? t.offices.list[2].title : t.offices.list[1].title}
              </p>
              <p style={{ fontSize: 11, color: '#444', margin: '0 0 2px' }}>
                {lang === 'cn' ? t.offices.list[2].location : t.offices.list[1].location}
              </p>
              <a href={`mailto:${lang === 'cn' ? t.offices.list[2].email : t.offices.list[1].email}`} style={{ fontSize: 11, color: '#c7ab54', textDecoration: 'underline' }}>
                {lang === 'cn' ? t.offices.list[2].email : t.offices.list[1].email}
              </a>
            </div>


            {/* China Branch pin (CN only) */}
            {lang === 'cn' && (
              <div style={{
                position: 'absolute',
                top: '12%',
                left: '68%',
                background: '#fff',
                borderRadius: 4,
                padding: '8px 10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
                minWidth: 150,
              }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', color: '#c7ab54', margin: '0 0 3px', textTransform: 'uppercase' }}>
                  {t.offices.list[1].title}
                </p>
                <p style={{ fontSize: 11, color: '#444', margin: '0 0 2px' }}>{t.offices.list[1].location}</p>
                <a href={`mailto:${t.offices.list[1].email}`} style={{ fontSize: 11, color: '#c7ab54', textDecoration: 'underline' }}>
                  {t.offices.list[1].email}
                </a>
              </div>
            )}

            {/* China HQ pin */}
            <div style={{
              position: 'absolute',
              top: lang === 'cn' ? '62%' : '60%',
              left: '68%',
              background: '#fff',
              borderRadius: 4,
              padding: '8px 10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
              minWidth: 150,
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', color: '#c7ab54', margin: '0 0 3px', textTransform: 'uppercase' }}>
                {t.offices.list[0].title}
              </p>
              <p style={{ fontSize: 11, color: '#444', margin: '0 0 2px' }}>{t.offices.list[0].location}</p>
              <a href={`mailto:${t.offices.list[0].email}`} style={{ fontSize: 11, color: '#c7ab54', textDecoration: 'underline' }}>
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
