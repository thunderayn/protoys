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
      <section style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <OdmProcessSection />
        </div>
      </section>
      <ContactBottom />
    </>
  )
}
