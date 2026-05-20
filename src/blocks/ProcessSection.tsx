import ProductsSection from './ProductsSection'
import OdmProcessSection from './OdmProcessSection'

export default function ProcessSection() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '64px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr]" style={{ gap: 48 }}>
          <ProductsSection />
          <OdmProcessSection />
        </div>
      </div>
    </section>
  )
}
