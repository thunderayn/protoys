import { useLanguage } from '../i18n/LanguageContext'

const content = {
  en: {
    label: 'Company Overview',
    paras: [
      'Pro Toys is a professional plush toy manufacturer specializing in OEM and ODM custom stuffed toys for clients worldwide. We provide complete manufacturing solutions, including product design, sample development, material sourcing, mass production, quality inspection, packaging, and international shipping.',
      'With a strong focus on craftsmanship, safety, and innovation, Pro Toys works closely with brands, retailers, promotional companies, amusement businesses, and distributors to create high-quality plush products tailored to market demands. Our mission is to combine creativity, reliability, and manufacturing excellence to help our clients bring their ideas to life.',
      'We are committed to building long-term partnerships through consistent quality, competitive pricing, efficient communication, and dependable delivery schedules.',
    ],
  },
  cn: {
    label: '公司简介',
    paras: [
      'Pro Toys 是一家专业的毛绒玩具制造商，专注于为全球客户提供 OEM 和 ODM 定制毛绒玩具服务。我们提供完整的制造解决方案，包括产品设计、样品开发、材料采购、批量生产、质量检测、包装及国际运输。',
      '凭借对工艺、安全与创新的高度重视，Pro Toys 与品牌商、零售商、促销公司、游乐企业及经销商紧密合作，打造符合市场需求的高品质毛绒产品。我们的使命是将创意、可靠性与卓越制造能力相结合，帮助客户将创意变为现实。',
      '我们致力于通过稳定的品质、具有竞争力的价格、高效的沟通与可靠的交货周期，与客户建立长期合作关系。',
    ],
  },
}

export default function AboutIntroSection() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <div style={{ background: '#f8f8f6', borderTop: '1px solid #f0f0f0', padding: '72px 48px', textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <img src="/Logo_nobackground.png" alt="Pro Toys" style={{ height: 120, width: 'auto', display: 'block', margin: '0 auto 28px' }} />
        {t.paras.map((p, i) => (
          <p key={i} style={{ fontSize: 15, color: '#444', lineHeight: 1.85, margin: i < t.paras.length - 1 ? '0 0 16px' : '0 0 24px' }}>
            {p}
          </p>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 2, background: '#c7ab54', flexShrink: 0 }} />
          <span style={{ fontSize: 16, fontWeight: 800, color: '#c7ab54', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {t.label}
          </span>
          <div style={{ width: 28, height: 2, background: '#c7ab54', flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}
