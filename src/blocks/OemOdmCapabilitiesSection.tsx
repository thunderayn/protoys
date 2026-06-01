import { useLanguage } from '../i18n/LanguageContext'

const content = {
  en: {
    productsLabel: 'We support a wide range of custom plush products, including:',
    products: [
      'Stuffed animals',
      'Mascot toys',
      'Promotional plush items',
      'Character plush collections',
      'Seasonal and holiday plush products',
      'Baby and educational plush toys',
    ],
    processLabel: 'Our production process emphasizes:',
    process: [
      'High-quality materials',
      'Detailed craftsmanship',
      'Safety compliance',
      'Efficient lead times',
      'Flexible customization options',
    ],
    closing: 'With large-scale production capacity and experienced export operations, we are able to handle both small custom orders and large-volume manufacturing projects for international clients.',
  },
  cn: {
    productsLabel: '我们支持多种定制毛绒产品，包括：',
    products: [
      '填充动物玩具',
      '吉祥物玩偶',
      '促销毛绒礼品',
      '角色毛绒系列',
      '节日与季节性毛绒产品',
      '婴幼儿及益智毛绒玩具',
    ],
    processLabel: '我们的生产流程注重：',
    process: [
      '高品质原材料',
      '精细工艺',
      '安全合规',
      '高效交期',
      '灵活的定制选项',
    ],
    closing: '凭借大规模的生产能力和丰富的出口经验，我们能够承接小批量定制订单和大批量国际制造项目。',
  },
}

export default function OemOdmCapabilitiesSection() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section style={{ background: '#f8f8f6', borderTop: '1px solid #f0f0f0', padding: '64px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 48, marginBottom: 40 }}>

          {/* Products list */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1714', margin: '0 0 12px', lineHeight: 1.6 }}>
              {t.productsLabel}
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {t.products.map((item) => (
                <li key={item} style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Process list */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1714', margin: '0 0 12px', lineHeight: 1.6 }}>
              {t.processLabel}
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {t.process.map((item) => (
                <li key={item} style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <p style={{ fontSize: 14, color: '#444', lineHeight: 1.85, maxWidth: 860, borderTop: '1px solid #ececec', paddingTop: 28, margin: 0 }}>
          {t.closing}
        </p>
      </div>
    </section>
  )
}
