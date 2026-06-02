import OemOdmHeroSection from '../blocks/OemOdmHeroSection'
import ExportMarketsSection from '../blocks/ExportMarketsSection'
import OdmProcessSection from '../blocks/OdmProcessSection'

import ContactBottom from '../blocks/ContactBottomSection'
import ImageProcessSection from '../blocks/ImageProcessSection'

export default function CustomPage() {
  return (
    <>
      <OemOdmHeroSection />
      <ExportMarketsSection />
      <ImageProcessSection />
      <section className="py-16 px-6 md:py-32 md:px-32" style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <OdmProcessSection />
        </div>
      </section>
      
      <ContactBottom />
    </>
  )
}
