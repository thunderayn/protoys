import ProductsHeroSection from '../blocks/ProductsHeroSection'
import ProductsCatalogSection from '../blocks/ProductsCatalogSection'
import ProductsFeaturesBar from '../blocks/ProductsFeaturesBar'
import ProductsBottomCTA from '../blocks/ProductsBottomCTA'

export default function ProductsPage() {
  return (
    <>
      <ProductsHeroSection />
      <ProductsFeaturesBar />
      <ProductsCatalogSection />
      
      <ProductsBottomCTA />
    </>
  )
}
