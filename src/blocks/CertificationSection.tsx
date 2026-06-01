import { useLanguage } from '../i18n/LanguageContext'
import { aboutPageText } from '../i18n/translations/aboutPage'

const CERTS = [
  { label: 'ISO',        src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205583/cert7_tayiok.png' },
 
  { label: 'BSCI',       src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205580/cert4_nx3rm9.png' },
   { label: 'Walmart',    src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205581/cert8_y7mjg3.png' },
  { label: 'Recycled',   src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert5_jfyfzf.png' },
  { label: 'FSC',        src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert6_iccjux.png' },
  { label: 'Recycled 2', src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert3_lvewgm.jpg' },
  { label: 'Sedex',      src: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert1_imtkwd.png' },
]

export default function CertificationSection() {
  const { lang } = useLanguage()
  const t = aboutPageText[lang].certs

  return (
    <section className="cert-section" style={{ background: '#f8f8f6', borderTop: '1px solid #f0f0f0', padding: '72px 48px' }}>
      <style>{`@media (min-width: 1024px) { .cert-section { padding: 96px 80px !important; } .cert-grid { gap: 56px !important; } }`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ width: 32, height: 2, background: '#c7ab54', marginBottom: 14 }} />
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1714', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 14px' }}>
          {t.eyebrow}
        </h2>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 560 }}>
          {t.body}
        </p>
        <div className="cert-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
          {CERTS.map((cert) => (
            <img key={cert.src} src={cert.src} alt={cert.label} style={{ height:86, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
