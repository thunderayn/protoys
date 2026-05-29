import { useLanguage } from '../i18n/LanguageContext'

const sectionText = {
  en: { eyebrow: 'CLIENT REVIEWS', heading: 'What Our Clients Say' },
  cn: { eyebrow: '客户评价', heading: '客户怎么说' },
}

const REVIEWS = [
  {
    en: 'Excellent quality and very professional service. The plush toys were soft, well-made, and exactly matched our design requirements. Communication throughout the production process was smooth and efficient. Highly recommended for OEM and custom plush manufacturing.',
    cn: '品质出色，服务非常专业。毛绒玩具手感柔软、做工精良，完全符合我们的设计要求。整个生产过程中沟通顺畅高效，强烈推荐用于OEM及定制毛绒玩具生产。',
    name: 'Ethan Parker',
    location: 'Los Angeles, USA',
  },
  {
    en: 'Pro Toys exceeded our expectations. From sample development to mass production, the process was organized and transparent. The craftsmanship and material quality were impressive, and our customers loved the final products.',
    cn: 'Pro Toys 超出了我们的预期。从样品开发到批量生产，整个流程组织有序、透明规范。工艺和材料质量令人印象深刻，我们的客户对最终产品非常满意。',
    name: 'Matthew Brooks',
    location: 'Miami, USA',
  },
  {
    en: 'We have worked with Pro Toys on multiple custom projects, and every order arrived on time with consistent quality. Their team pays close attention to details, packaging, and safety standards. A reliable manufacturing partner for long-term cooperation.',
    cn: '我们与 Pro Toys 合作了多个定制项目，每次订单都准时交货，品质稳定如一。他们的团队对细节、包装和安全标准高度重视，是值得长期合作的可靠制造伙伴。',
    name: 'Grace Mitchell',
    location: 'Leeds, UK',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: '#c7ab54', fontSize: 16 }}>★</span>
      ))}
    </div>
  )
}

export default function ClientReviewsSection() {
  const { lang } = useLanguage()
  const t = sectionText[lang]

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
      {/* Testimonials */}
      <div style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#c7ab54', letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {t.eyebrow}
          </p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1714', margin: '0 0 40px', letterSpacing: '-0.01em' }}>
            {t.heading}
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 24 }}
          >
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                style={{
                  padding: '32px 28px',
                  background: '#faf9f7',
                  border: '1px solid #efefef',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stars />
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, margin: '0 0 24px', flex: 1 }}>
                  "{r[lang]}"
                </p>
                <div style={{ borderTop: '1px solid #ebebeb', paddingTop: 16 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1714' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
