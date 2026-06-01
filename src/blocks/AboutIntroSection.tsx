import { useLanguage } from '../i18n/LanguageContext'

const content = {
  en: {
    label: 'Company Overview',
    paras: [
      'Henan Pro Toys Co., Ltd. was founded in 2022 and is located in Buildings A2 and A8 of the SME Incubation Park, Economic Development Zone, Yongcheng City, Shangqiu, Henan Province. We are a manufacturing enterprise specializing in the design, production, and sales of plush toys. Our main products include various plush toys, stuffed dolls, holiday gift toys, children\'s comfort toys, animal-shaped toys, cartoon character toys, and customized plush products for clients.',
      'Currently, the company owns two modern standard factory buildings with a total floor area of over 10,500 square meters, employing more than 300 staff members. We produce over 4 million plush toys annually, with stable mass production capacity and reliable order fulfillment capabilities.',
      'The company upholds the business philosophy of "quality first, customer-oriented, integrity-based, and continuous innovation," consistently improving product design, production management, and quality control capabilities to meet the needs of domestic and international clients. We maintain a comprehensive production process covering cutting, sewing, hand-finishing, stuffing, quality inspection, and packaging, enabling us to provide one-stop services from sample development to mass production. We accept OEM and ODM orders, supporting client-supplied designs, samples, and artwork for customization, and can provide supporting services such as fabric selection, size design, embroidery, packaging methods, hang tags, and carton markings to meet different market requirements.',
      'In terms of quality management, the company prioritizes product safety and production standards, strictly controlling key processes including raw material procurement, production, finished goods inspection, and packaging and shipment, to ensure consistent product quality. The company has passed Walmart factory audits, SEDEX ethical audits, and ISO 9001 quality management system certification, meeting the requirements to serve international clients and fulfill overseas orders.',
      'In terms of market development, our products have been exported to countries including the United States, Canada, Germany, the United Kingdom, Czech Republic, and Australia, building a solid base of overseas clients and international trade experience. Going forward, the company will continue to leverage its production capabilities and customization advantages to actively expand into international markets, enhancing brand influence and growing its export business.',
    ],
  },
  cn: {
    label: '公司简介',
    paras: [
      '河南普罗玩具有限公司成立于2022年，位于河南省商丘市永城市经开区中小企业孵化园A2栋和A8栋，是一家专注于毛绒玩具设计、生产和销售的生产企业。公司主要产品包括各类毛绒玩具、毛绒公仔、节日礼品玩具、儿童安抚玩具、动物造型玩具、卡通形象玩具及客户定制类毛绒产品。',
      '目前，公司拥有两栋现代化标准厂房，总建筑面积超过10,500平方米，现有员工300多人，年产各类毛绒玩具超过400万只，具备稳定的批量生产能力和订单交付能力。',
      '公司坚持"质量为本、客户至上、诚信经营、持续创新"的经营理念，围绕国内外客户需求，不断提升产品设计能力、生产组织能力和质量控制能力。公司拥有较为完善的生产流程，涵盖裁剪、缝纫、手工、充棉、质检、包装等多个环节，能够根据客户订单要求提供从样品开发到批量生产的一站式服务。公司可承接 OEM、ODM 订单，支持客户来图、来样、来稿定制，并可根据不同市场需求提供面料选择、尺寸设计、刺绣工艺、包装方式、吊牌标签、外箱唛头等配套服务。',
      '在质量管理方面，公司重视产品安全和生产规范，严格控制原材料采购、生产过程、成品检验和包装出货等关键环节，努力保障产品质量稳定。公司已通过 Walmart 工厂审核，SEDEX 人权审核和ISO9001质量管理体系认证，具备服务国际客户和承接海外订单的条件。',
      '在市场开拓方面，公司产品已出口至美国、加拿大、德国、英国、捷克、澳大利亚等国家，积累了一定的海外客户资源和外贸订单经验。未来，公司将继续依托自身生产能力和定制服务优势，积极开拓国际市场，提升企业品牌影响力和出口业务规模。',
    ],
  },
}

export default function AboutIntroSection() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <div style={{ background: '#f8f8f6', borderTop: '1px solid #f0f0f0', padding: '72px 48px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <img src="/Logo_nobackground.png" alt="Pro Toys" style={{ height: 120, width: 'auto', display: 'block', margin: '0 auto 28px' }} />
        {t.paras.map((p, i) => (
          <p key={i} style={{ fontSize: 15, color: '#444', lineHeight: 1.85, textAlign: 'left', margin: i < t.paras.length - 1 ? '0 0 16px' : '0 0 24px' }}>
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
