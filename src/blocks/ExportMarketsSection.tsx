import { useLanguage } from '../i18n/LanguageContext'

const REGIONS = [
  { code: 'us', en: 'United States', cn: '美国' },
  { code: 'eu', en: 'European Union', cn: '欧盟' },
  { code: 'gb', en: 'United Kingdom', cn: '英国' },
  { code: 'au', en: 'Australia', cn: '澳大利亚' },
  { code: 'ca', en: 'Canada', cn: '加拿大' },
]

const text = {
  en: { eyebrow: 'EXPORT MARKETS', heading: 'Serving Clients Worldwide' },
  cn: { eyebrow: '出口市场', heading: '服务全球客户' },
}

export default function ExportMarketsSection() {
  const { lang } = useLanguage()
  const t = text[lang]

  return (
    <section style={{ background: '#f8f8f6', borderTop: '1px solid #f0f0f0', padding: '56px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#c7ab54', letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 0 8px' }}>
          {t.eyebrow}
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1714', margin: '0 0 32px', letterSpacing: '-0.01em' }}>
          {t.heading}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {REGIONS.map((r) => (
            <div
              key={r.en}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 20px',
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: 4,
              }}
            >
              <img src={`https://flagcdn.com/w40/${r.code}.png`} alt={r.en} style={{ width: 36, height: 'auto', borderRadius: 2, display: 'block' }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1714', letterSpacing: '0.02em' }}>{r[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
