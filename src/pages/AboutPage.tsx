import AboutHeroSection from '../blocks/AboutHeroSection'
import AboutStatsBar from '../blocks/AboutStatsBar'
import AboutIntroSection from '../blocks/AboutIntroSection'
import ClientReviewsSection from '../blocks/ClientReviewsSection'
import CertificationSection from '../blocks/CertificationSection'
import ContactBottom from '../blocks/ContactBottomSection'
import AboutProcessSection from '../blocks/AboutProcessSection'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStatsBar />
      <AboutIntroSection />
      <AboutProcessSection />
      <CertificationSection />
      <ClientReviewsSection />
      <ContactBottom />
    </>
  )
}
